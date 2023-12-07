import React, {useEffect, useState} from 'react';
import {getGenitiveCase} from "../Functions/GetGenetiveCase"
import {getDativeCase} from "../Functions/GetDativeCase"
const Script2 = ({parentName, yourName, subject, childName, childGender, updateResult}) => {

    const [additions, setAdditions] = useState([
        {id: 0, checked: false, addition: "Также он" +gender(2)+ " очень внимател" +gender(3)+ " и старател" +gender(3)+ ".\n"},
        {id: 1, checked: false, addition: "Также он" +gender(2)+ " очень творчески подходит к заданиям и не боится экспериментировать.\n"},
        {id: 2, checked: false, addition: "Также он" +gender(2)+ " отлично работает самостоятельно.\n"},
        {id: 3, checked: false, addition: "Есть несколько моментов, на которые " +getDativeCase(childName)+ " нужно обратить больше внимания:\n"},
        {id: 4, checked: false, addition: "тема ______ далась сложнее остальных, нам нужно уделить ей больше внимания.\n"},
        {id: 5, checked: false, addition: childName+ " испытывает сложности с изучением некоторых тем. Рекомендую ______.\n"},
        {id: 6, checked: false, addition: "домашнее задание: " +childName+ " не всегда выполняет его, а без закрепления материала он может очень быстро забываться.\n"},
        {id: 7, checked: false, addition: childName+ " иногда позже подключается к уроку, из-за чего мы не всегда успеваем полноценно провести урок, это может влиять на эффективность обучения.\n"},
        {id: 8, checked: false, addition: childName+ " всегда актив" +gender(4)+ " на уроках,чувствуется, что " +gender(5)+ " нравится заниматься.\n"}
    ])

    useEffect(() => {
        textPush()
    }, [parentName, yourName, subject, childName, childGender, additions]);


    function textPush(){
        let whatIGonnaPush = "Добрый день, " + parentName + "!\n" +
            "На связи " + yourName + ", я преподаватель subject школы RTS.\n" +
            "Хочу поделиться успехами " +getGenitiveCase(childName)+ " на уроках.\n" +
            "Мы провели 4 урока и " + childName + " научил" +gender(1)+ " _________.\n" +
            "У " +getGenitiveCase(childName)+ " хорошо получается _________.\n\n";
            for (const add in additions){
                if (additions[add].checked){
                    whatIGonnaPush += additions[add].addition
                }
            }
        whatIGonnaPush += "\nНа следующих занятиях мы хотим сделать упор на _________.\n" +
            "Есть ли у вас какие-то вопросы или пожелания по нашим занятиям?"
        updateResult(whatIGonnaPush)


    }

    function gender(numb){
        switch (numb){
            case 1:
                return childGender === "Мальчик" ? "ся" : "ась"
            case 2:
                return childGender === "Мальчик" ? "" : "а"
            case 3:
                return childGender === "Мальчик" ? "ен" : "ьна"
            case 4:
                return childGender === "Мальчик" ? "ен" : "на"
            case 5:
                return childGender === "Мальчик" ? "ему" : "ей"
        }
    }

    function setCheckAddition(index, target){
        setAdditions(
            additions.map((addition) =>
                addition.id === index
                    ? { ...addition, checked: target.checked }
                    : { ...addition }
            )
        )
    }

    return (
        <div className="scriptText">
                Добрый день, {parentName}!
                <br/><br/>На связи {yourName}, я преподаватель subject школы RTS.
                <br/> Хочу поделиться успехами {getGenitiveCase(childName)} на уроках.
                <br/>Мы провели 4 урока и {childName} научил{childGender === "Мальчик" ? "ся" : "ась"} _________.

                <br/>У {getGenitiveCase(childName)} хорошо получается _________.
                <br/><br/><p style={additions[0].checked ? {color:"rgba(0,0,0, 1)"}: {color:"rgba(0,0,0, 0.4)"}} ><input type="checkbox" id="" name="" onChange={event => setCheckAddition(0, event.target)}/>Также он{childGender === "Мальчик" ? "" : "а"} очень внимателен{childGender === "Мальчик" ? "" : "а"} и старателен{childGender === "Мальчик" ? "" : "а"}.</p>
                <p style={additions[1].checked ? {color:"rgba(0,0,0, 1)"}: {color:"rgba(0,0,0, 0.4)"}} ><input type="checkbox" id="" name="" onChange={event => setCheckAddition(1, event.target)}/>Также он{childGender === "Мальчик" ? "" : "а"} очень творчески подходит к заданиям и не боится экспериментировать.</p>
                <p style={additions[2].checked ? {color:"rgba(0,0,0, 1)"}: {color:"rgba(0,0,0, 0.4)"}} ><input type="checkbox" id="" name="" onChange={event => setCheckAddition(2, event.target)}/>Также он{childGender === "Мальчик" ? "" : "а"} отлично работает самостоятельно.</p>
                <br/><p style={additions[3].checked ? {color:"rgba(0,0,0, 1)"}: {color:"rgba(0,0,0, 0.4)"}} ><input type="checkbox" id="" name="" onChange={event => setCheckAddition(3, event.target)}/>Есть несколько моментов, на которые {getDativeCase(childName)} нужно обратить больше внимания:</p>
                <p style={additions[4].checked ? {color:"rgba(0,0,0, 1)"}: {color:"rgba(0,0,0, 0.4)"}} ><input type="checkbox" id="" name="" onChange={event => setCheckAddition(4, event.target)}/>	тема ______ далась сложнее остальных, нам нужно уделить ей больше внимания.</p>
                <p style={additions[5].checked ? {color:"rgba(0,0,0, 1)"}: {color:"rgba(0,0,0, 0.4)"}} ><input type="checkbox" id="" name="" onChange={event => setCheckAddition(5, event.target)}/> {childName} испытывает сложности с изучением некоторых тем. Рекомендую ______.</p>
                <p style={additions[6].checked ? {color:"rgba(0,0,0, 1)"}: {color:"rgba(0,0,0, 0.4)"}} ><input type="checkbox" id="" name="" onChange={event => setCheckAddition(6, event.target)}/>	домашнее задание: {childName} не всегда выполняет его, а без закрепления материала он может очень быстро забываться.</p>
                <p style={additions[7].checked ? {color:"rgba(0,0,0, 1)"}: {color:"rgba(0,0,0, 0.4)"}} ><input type="checkbox" id="" name="" onChange={event => setCheckAddition(7, event.target)}/> {childName} иногда позже подключается к уроку, из-за чего мы не всегда успеваем полноценно провести урок, это может влиять на эффективность обучения.</p>
                <p style={additions[8].checked ? {color:"rgba(0,0,0, 1)"}: {color:"rgba(0,0,0, 0.4)"}} ><input type="checkbox" id="" name="" onChange={event => setCheckAddition(8, event.target)}/> {childName} всегда активен{childGender === "Мальчик" ? "" : "а"} на уроках,чувствуется, что {childGender === "Мальчик" ? "ему" : "ей"} нравится заниматься.</p>
                <br/>На следующих занятиях мы хотим сделать упор на _________.
                Есть ли у вас какие-то вопросы или пожелания по нашим занятиям?

        </div>
    );
};

export default Script2;