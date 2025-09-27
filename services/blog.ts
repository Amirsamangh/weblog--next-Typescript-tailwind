export const getBlogService = async () => {
    const response = await fetch("http://localhost:4004/api/articles");
    const data = await response.json();
    return data;
};

export const getBlogByIdService = async (id: string) => {
    const response = await fetch(`http://localhost:4004/api/articles/${id}`);
    const data = await response.json();
    return data;
};