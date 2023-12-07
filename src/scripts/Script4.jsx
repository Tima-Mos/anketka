import React, {useEffect, useState} from 'react';
import {getGenitiveCase} from "../Functions/GetGenetiveCase"
import {getDativeCase} from "../Functions/GetDativeCase";
const Script4 = ({parentName, yourName, subject, childName, childGender, updateResult}) => {

    const [additions, setAdditions] = useState([
        {id: 0, checked: false, addition: childName+ " - большой молодец, " +gender(6)+ " очень старается и уже делает успехи. Например, сегодня мы сделали_____ Сложности возникают с____, поэтому нам потребуется больше времени на прохождение курса и некоторые уроки мы разобьем на 2.\n" + "Хочу отметить, что здорово получилось____\n"},
        {id: 1, checked: false, addition: "Если у ребенка все получается:\n" + childName+ " - большой молодец, " +gender(6)+ " очень старается и уже делает успехи. На данный момент все получается, и на урок мы тратим столько времени, сколько было запланировано.\nОсобенно хорошо получается____\n"},
    ])

    useEffect(() => {
        textPush()
    }, [parentName, yourName, subject, childName, childGender, additions]);

    function setCheckAddition(index, target){
        console.log(target)
        setAdditions(
            additions.map((addition) =>
                addition.id === index
                    ? { ...addition, checked: target.checked }
                    : { ...addition, checked: !target.checked}
            )
        )
    }
    function textPush(){

        let whatIGonnaPush = "Добрый день, " +parentName+ "!\n" +
            "На связи " +yourName+ ", я преподаватель " +subject+ " школы RTS.\n" +
            "Хотела бы дать вам обратную связь по нашим урокам и плану обучения " +getGenitiveCase(childName)+ ".\n" +
            "\n" +
            "Наш курс состоит из __ уроков.\n" +
            "\n";
        for (const add in additions){
            if (additions[add].checked){
                whatIGonnaPush += additions[add].addition
            }
        }
        whatIGonnaPush += "\nЕсть ли у вас какие-то вопросы или комментарии по нашим занятиям?"

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
            case 6:
                return childGender === "Мальчик" ? "он" : "она"
        }
    }
    return (
        <div>
            Добрый день, {parentName}!

            <br/><br/>На связи {yourName}, я преподаватель {subject} школы RTS.
            <br/>Хотела бы дать вам обратную связь по нашим урокам и плану обучения {getGenitiveCase(childName)}.

            <br/><br/>Наш курс состоит из __ уроков.

            <br/><p style={additions[0].checked ? {color:"rgba(0,0,0, 1)"}: {color:"rgba(0,0,0, 0.4)"}}><input  type="radio" name="performance" value='false'  onChange={event => setCheckAddition(0, event.target)} /><i><b>Если ребенок не уложится в это курс:</b></i>

            <br/><br/>{childName} - большой молодец, {childGender === "Мальчик" ? "он" : "она"} очень старается и уже делает успехи. Например, сегодня мы сделали_____ Сложности возникают с____, поэтому нам потребуется больше времени на прохождение курса и некоторые уроки мы разобьем на 2.

            <br/>Хочу отметить, что здорово получилось____</p>

            <br/><p style={additions[1].checked ? {color:"rgba(0,0,0, 1)"}: {color:"rgba(0,0,0, 0.4)"}}><input type="radio" name="performance" value='true' onChange={event => setCheckAddition(1, event.target)} /><i><b>Если у ребенка все получается:</b></i>
            <br/><br/>{childName} - большой молодец, {childGender === "Мальчик" ? "он" : "она"} очень старается и уже делает успехи. На данный момент все получается, и на урок мы тратим столько времени, сколько было запланировано.  Особенно хорошо получается____</p>

            <br/><br/>Есть ли у вас какие-то вопросы или комментарии по нашим занятиям?
        </div>
    );
};

export default Script4;