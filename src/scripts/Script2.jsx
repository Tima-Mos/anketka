import React from 'react';
import {getGenitiveCase} from "../Functions/GetGenetiveCase"
import {getDativeCase} from "../Functions/GetDativeCase"
const Script2 = ({parentName, yourName, subject, childName, childGender, updateResult}) => {
    return (
        <div>
                Добрый день, {parentName}!
                <br/><br/>На связи {yourName}, я преподаватель subject школы RTS.
                <br/> Хочу поделиться успехами {getGenitiveCase(childName)} на уроках.
                <br/>Мы провели 4 урока и {childName} научил{childGender === "Мальчик" ? "ся" : "ась"} _________.

                У {getGenitiveCase(childName)} хорошо получается _________.
                <br/><br/><input type="checkbox" id="" name=""/>Также он{childGender === "Мальчик" ? "" : "а"} очень внимателен{childGender === "Мальчик" ? "" : "а"} и старателен{childGender === "Мальчик" ? "" : "а"}.
                <br/><input type="checkbox" id="" name=""/>Также он{childGender === "Мальчик" ? "" : "а"} очень творчески подходит к заданиям и не боится экспериментировать.
                <br/><input type="checkbox" id="" name=""/>Также он{childGender === "Мальчик" ? "" : "а"} отлично работает самостоятельно.
                <br/><br/><input type="checkbox" id="" name=""/>Есть несколько моментов, на которые {getDativeCase(childName)} нужно обратить больше внимания:
                <br/><input type="checkbox" id="" name=""/>	тема ______ далась сложнее остальных, нам нужно уделить ей больше внимания.
                <br/><input type="checkbox" id="" name=""/> {childName} испытывает сложности с изучением некоторых тем. Рекомендую ______.
                <br/><input type="checkbox" id="" name=""/>	домашнее задание: {childName} не всегда выполняет его, а без закрепления материала он может очень быстро забываться.
                <br/><input type="checkbox" id="" name=""/> {childName} иногда позже подключается к уроку, из-за чего мы не всегда успеваем полноценно провести урок, это может влиять на эффективность обучения.
                <br/><br/>{childName} всегда активен{childGender === "Мальчик" ? "" : "а"} на уроках,чувствуется, что {childGender === "Мальчик" ? "ему" : "ей"} нравится заниматься.
                <br/>На следующих занятиях мы хотим сделать упор на _________.
                Есть ли у вас какие-то вопросы или пожелания по нашим занятиям?
        </div>
    );
};

export default Script2;