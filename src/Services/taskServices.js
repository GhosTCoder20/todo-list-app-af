import axios from "axios";

const SERVER_URL="http://localhost:9000";

export const getAllTasks=()=>{
    const url=`${SERVER_URL}/task`;
    return axios.get(url);
}
export const getTask=(taskId)=>{
    const url=`${SERVER_URL}/task/${taskId}`;
    return axios.get(url);
}
export const getAllCategory=()=>{
    const url=`${SERVER_URL}/Category`;
    return axios.get(url);
}
export const getCategory=(categoryId)=>{
    const url=`${SERVER_URL}/Category/${categoryId}`;
    return axios.get(url);
}
export const createTask=(task)=>{
    const url=`${SERVER_URL}/task`;
    return axios.post(url,task);
}
export const updateTask=(task,taskId)=>{
    const url=`${SERVER_URL}/task/${taskId}`;
    return axios.put(url,task);
}
export const deleteTask=(task,taskId)=>{
    const url=`${SERVER_URL}/task/${taskId}`;
    return axios.delete(url);
}