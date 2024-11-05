const API_URL = '/api';

export const scanVulnerabilities = async (url) => {
    const response = await fetch(`${API_URL}/scanner`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
    });
    return response.json();
};

export const analyzeMalware = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await fetch(`${API_URL}/malware/analyze`, {
        method: 'POST',
        body: formData
    });
    return response.json();
};

export const checkBreach = async (email) => {
    const response = await fetch(`${API_URL}/breach/check`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    });
    return response.json();
};
