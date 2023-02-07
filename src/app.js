"use strict";
import { user } from "./modules/user";

//connection à l'API randomUser.me
const loadData = async () => {
    const $requeteJSON = " ";
    try {
    let res = await fetch("https://randomuser.me/api/?results=20")
    .then((res) => res.json())
    .then((res) => console.log(res))
    //.then((res) => $requeteJSON = res.parse(res.responseText))
    } catch (e) {
    console.error(`💥${e.message}`);
    }
}

loadData()