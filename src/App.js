import "./App.css";
import React, { useState } from 'react';
import { List } from "./components/List";
import { listData } from "./listData";

export default function App() {
    const [list, setList] = useState(listData);

    return (
        <List list={list} />
    );
}













