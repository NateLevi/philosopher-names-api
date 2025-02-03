const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const philosophers = {
    'siddhartha gautama': {
        'mainIdeas': 'Four Noble Truths, Eightfold Path, Middle Way',
        'influence': 'Eastern philosophy',
        'students': 'First five ascetics, Ananda, Mahākāśyapa',
        'teachers': 'Alara Kalama, Uddaka Ramaputta',
        'lifePhilosophy': 'Life is full of suffering, but there is a path to liberation',
        'majorWorks': 'Pali Canon',
        'famousQuote': '“No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.”',
        'historicalPeriod': 'Ancient India, 563-483 BCE'
    },
    'lao tzu': {
        'mainIdeas': 'The Way (Tao), Wu Wei, Harmony with nature',
        'influence': 'Eastern philosophy, Taoism',
        'students': 'Unknown specific individuals',
        'teachers': 'Unknown',
        'lifePhilosophy': 'Live in harmony with the Tao (the Way) by embracing simplicity, humility, and non-action (wu wei), allowing the natural flow of life to unfold without force or resistance.',
        'majorWorks': 'Tao Te Ching',
        'famousQuote': '“The journey of a thousand miles begins with a single step.”',
        'historicalPeriod': 'Ancient China, 6th century BCE'
    },
    'confucius': {
        'mainIdeas': 'Moral virtue, Social harmony, Filial piety',
        'influence': 'Eastern philosophy, Chinese society',
        'students': 'Yan Hui, Zengzi',
        'teachers': 'Unknown',
        'lifePhilosophy': "Harmony arises through moral virtue, respect for relationships, and ethical leadership.",
        'famousQuote': '“By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.”',
        'majorWorks': 'Analects',
        'historicalPeriod': 'Ancient China, 551-479 BCE'
    },
    'rumi': {
        'mainIdeas': 'Divine love, Spiritual evolution, Unity with God',
        'influence': 'Islamic mysticism, Poetry',
        'students': 'Hussam Chalabi, Sultan Walad',
        'teachers': 'Shams of Tabriz, Burhan al-Din',
        'lifePhilosophy': 'Seek union with the divine through love, self-awareness, and the realization of oneness beyond all dualities.',
        'famousQuote': '“Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.”',
        'majorWorks': 'Masnavi, Diwan-e Shams-e Tabrizi',
        'historicalPeriod': 'Persia, 1207-1273 CE'
    },
    'sun tzu': {
        'mainIdeas': 'Strategic warfare, Leadership, Deception tactics',
        'influence': 'Military strategy, Politics',
        'students': 'King of Wu\'s concubines, military generals',
        'teachers': 'Unknown',
        'lifePhilosophy': 'Achieve victory through strategy, adaptability, and understanding, prioritizing intelligence and deception over brute force.',
        'famousQuote': '“Appear weak when you are strong, and strong when you are weak.”',
        'majorWorks': 'The Art of War',
        'historicalPeriod': 'Ancient China, 544-496 BCE'
    },
    'alan watts': {
        'mainIdeas': 'Eastern philosophy',
        'influence': 'Western understanding of Eastern thought, Counter-culture',
        'students': 'Unknown',
        'teachers': 'D.T. Suzuki, Lao Tzu',
        'lifePhilosophy': 'Embrace the present moment, recognize the illusion of separateness, and flow with life as an interconnected whole.',
        'majorWorks': '	The Wisdom of Insecurity, The Book: On the Taboo Against Knowing Who You Are, The Way of Zen',
        'famousQuote': '“You are an aperture through which the universe is looking at and exploring itself.”',
        'historicalPeriod': 'England/USA, 1915-1973'
    },
    'krishnamurti': {
        'mainIdeas': 'Freedom from conditioning, Questioning authority, Direct perception',
        'influence': 'Modern spirituality, Psychology, Education reform',
        'students': 'Unknown',
        'teachers': 'Theosophical Society',
        'lifePhilosophy': 'Truth is a pathless land; self-awareness and freedom from conditioning are the keys to understanding oneself.',
        'majorWorks': 'Freedom from the Known, The First and Last Freedom',
        'famousQuote': '“The ability to observe without evaluating is the highest form of intelligence.”',
        'historicalPeriod': 'India/International, 1895-1986'
    },
    'nietzsche': {
        'mainIdeas': 'Will to power, Eternal recurrence, Death of God, Übermensch',
        'influence': 'Western philosophy, Existentialism, Psychology',
        'students': 'Unknown',
        'teachers': 'Arthur Schopenhauer',
        'lifePhilosophy': 'Embrace the will to power, create your own values, and overcome nihilism by striving to become the Übermensch.',
        'majorWorks': 'Thus Spoke Zarathustra, Beyond Good and Evil, The Gay Science',
        'famousQuotes': '"He who has a why to live can bear almost any how."',
        'historicalPeriod': 'Germany, 1844-1900'
    },
    'marcus aurelius': {
        'mainIdeas': 'Stoicism, Self-discipline, Acceptance of fate',
        'influence': 'Western philosophy, Leadership, Personal development',
        'students': 'Unknown',
        'teachers': 'Rusticus, Apollonius, Maximus',
        'lifePhilosophy': 'Live virtuously by accepting what you cannot control, focusing on your own actions, and aligning with nature and reason.',
        'majorWorks': 'Meditations',
        'famousQuotes': 'The happiness of your life depends upon the quality of your thoughts',
        'historicalPeriod': 'Roman Empire, 121-180 CE'
    },
    'plato': {
        'mainIdeas': 'Theory of Forms, Justice, Immortality of soul',
        'influence': 'Western philosophy, Political theory',
        'students': 'Aristotle, Xenocrates, Speusippus',
        'teachers': 'Socrates',
        'lifePhilosophy': 'Knowledge of the Good leads to right action',
        'majorWorks': 'Republic, Symposium, Apology',
        'famousQuotes': '“Be kind, for everyone you meet is fighting a harder battle.”',
        'historicalPeriod': 'Classical Greece, 428-348 BCE'
    },
    'aristotle': {
        'mainIdeas': 'Logic, Virtue ethics, Natural science, Metaphysics',
        'influence': 'Western science, Philosophy, Biology, Logic',
        'students': 'Alexander the Great, Theophrastus',
        'teachers': 'Plato',
        'lifePhilosophy': 'Excellence is not an act but a habit',
        'majorWorks': 'Nicomachean Ethics, Physics, Metaphysics',
        'famousQuotes': 'We are what we repeatedly do. Excellence, then, is not an act, but a habit',
        'historicalPeriod': 'Classical Greece, 384-322 BCE'
    },
    'thoreau': {
        'mainIdeas': 'Civil disobedience, Self-reliance, Simple living',
        'influence': 'Environmental movement, Civil rights, Minimalism',
        'students': 'Unknown',
        'teachers': 'Ralph Waldo Emerson',
        'lifePhilosophy': 'Live deliberately, embrace simplicity, and align with nature to cultivate self-reliance and inner freedom.',
        'majorWorks': 'Walden, Civil Disobedience',
        'famousQuotes': '“The question is not what you look at, but what you see.”',
        'historicalPeriod': 'America, 1817-1862'
    },
    'emerson': {
        'mainIdeas': `Transcendentalism, Self-reliance, Nature's divinity`,
        'influence': 'American literature, Individualism, Spirituality',
        'students': 'Henry David Thoreau',
        'teachers': 'William Ellery Channing',
        'lifePhilosophy': 'Trust thyself: every heart vibrates to that iron string',
        'majorWorks': 'Nature, Self-Reliance, The Over-Soul',
        'famousQuotes': '"What lies behind us and what lies before us are tiny matters compared to what lies within us."',
        'historicalPeriod': 'America, 1803-1882'
    },
    'descartes': {
        'mainIdeas': 'Rationalism, Mind-body dualism',
        'influence': 'Modern philosophy, Mathematics, Scientific method',
        'students': 'Princess Elisabeth of Bohemia',
        'teachers': 'Jesuits',
        'lifePhilosophy': `Use reason and doubt to establish clear and certain knowledge, beginning with the foundational truth, 'I think, therefore I am.`,
        'majorWorks': 'Meditations on First Philosophy, Discourse on the Method',
        'famousQuotes': '“I think; therefore I am.”',
        'historicalPeriod': 'France, 1596-1650'
    },
    'kant': {
        'mainIdeas': 'Categorical imperative, Transcendental idealism, Duty ethics',
        'influence': 'Western philosophy, Ethics, Metaphysics',
        'students': 'Johann Gottfried Herder',
        'teachers': 'Martin Knutzen, Christian Wolff',
        'lifePhilosophy': 'Act only according to rules you could will to be universal laws',
        'majorWorks': 'Critique of Pure Reason, Groundwork of the Metaphysics of Morals',
        'famousQuotes': '“We are not rich by what we possess but by what we can do without.”',
        'historicalPeriod': 'Germany, 1724-1804'
    },
    'seneca': {
        'mainIdeas': 'Stoicism, Practical ethics, Self-discipline',
        'influence': 'Roman philosophy, Stoicism, Self-help',
        'students': 'Nero',
        'teachers': 'Attalus the Stoic',
        'lifePhilosophy': 'We suffer more in imagination than in reality',
        'majorWorks': 'Letters from a Stoic, On the Shortness of Life',
        'famousQuotes': '"Luck is what happens when preparation meets opportunity."',
        'historicalPeriod': 'Roman Empire, 4 BCE - 65 CE'
    },
    'schopenhauer': {
        'mainIdeas': 'Will as fundamental reality, Pessimism, Aesthetics as liberation',
        'influence': 'Western philosophy, Psychology, Buddhism in West',
        'students': 'Nietzsche',
        'teachers': 'Gottlob Ernst Schulze, Fichte',
        'lifePhilosophy': 'Life is suffering caused by human will and desire',
        'majorWorks': 'The World as Will and Representation, The Art of Always Being Right, The Wisdom of Life',
        'famousQuotes': '"Talent hits a target no one else can hit; genius hits a target no one else can see."',
        'historicalPeriod': 'Germany, 1788-1860'
    },
    'jung': {
        'mainIdeas': 'Collective unconscious, Archetypes, Personality types, Shadow self',
        'influence': 'Psychology, Psychiatry, Literature, Art',
        'students': 'Marie-Louise von Franz, Erich Neumann',
        'teachers': 'Sigmund Freud',
        'lifePhilosophy': 'Until you make the unconscious conscious, it will direct your life and you will call it fate',
        'majorWorks': 'Man and His Symbols, The Red Book, Psychology of the Unconscious',
        'famousQuotes': 'Who looks outside, dreams; who looks inside, awakes',
        'historicalPeriod': 'Switzerland, 1875-1961'
}
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const philosopherName = request.params.name.toLowerCase()

    if( philosophers[philosopherName] ){
        response.json(philosophers[philosopherName])
    }else{
        response.json(philosophers['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})
