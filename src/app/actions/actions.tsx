'use server';

export async function fetchServices() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}