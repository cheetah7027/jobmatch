const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock Data (Moved from SwipeScreen.tsx)
const mockJobs = [
    {
        id: 1,
        title: 'Senior React Developer',
        company: 'TechCorp Inc.',
        logo: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzYzNzg4MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        salary: '$120k - $160k',
        location: 'Remote',
        type: 'Full-time',
        skills: ['React', 'TypeScript', 'Node.js'],
        image: 'https://images.unsplash.com/photo-1702046988296-40db18f155ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzc4MDA1OHww&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Join our dynamic team building next-gen web applications.'
    },
    {
        id: 2,
        title: 'Product Designer',
        company: 'DesignLab',
        logo: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzYzNzg4MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        salary: '$100k - $140k',
        location: 'San Francisco, CA',
        type: 'Full-time',
        skills: ['Figma', 'UI/UX', 'Prototyping'],
        image: 'https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21wYW55JTIwb2ZmaWNlfGVufDF8fHx8MTc2MzgyODM5NXww&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Create beautiful and intuitive user experiences for millions of users.'
    },
    {
        id: 3,
        title: 'Full Stack Engineer',
        company: 'StartupXYZ',
        logo: 'https://images.unsplash.com/photo-1760138270903-d95903188730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MXx8fHwxNzYzNzg4MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        salary: '$130k - $170k',
        location: 'Remote',
        type: 'Full-time',
        skills: ['Python', 'React', 'AWS'],
        image: 'https://images.unsplash.com/photo-1702046988296-40db18f155ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mzc4MDA1OHww&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Build scalable systems that power the future of e-commerce.'
    }
];

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

app.get('/api/jobs', (req, res) => {
    res.json(mockJobs);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
