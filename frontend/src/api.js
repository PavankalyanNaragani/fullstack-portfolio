import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const fetchProjects = async () => {
    try {
        const response = await axios.get(`${API_URL}/projects/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
};

export const fetchSkills = async () => {
    try {
        const response = await axios.get(`${API_URL}/skills/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching skills:", error);
        return [];
    }
};

export const fetchEducation = async () => {
    try{
        const response = await axios.get(`${API_URL}/education/`);
        return response.data;
    } catch(error){
        console.error("Error fetching education details:", error)
        return [];
    }
};

export const fetchExperience = async () => {
    try{
        const response = await axios.get(`${API_URL}/experience/`);
        return response.data;
    } catch(error){
        console.error("Error fetching experience details:", error)
        return [];
    }
};