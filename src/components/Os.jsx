import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostItem from "./PostItem";
import {Container} from "react-bootstrap";

const os = () => {


    return (
        <div>


            {/*два селекта дял скрипта ОС и языка ОС*/}
            <div className="top-selects">
                <Form.Select
                    aria-label="Default select example"
                    className="select-left">
                    <option>Выберите скрипт</option>
                </Form.Select>
                <Form.Select
                    aria-label="Default select example"
                    className="select-right" >
                </Form.Select>
            </div>

            {/*4 инпута*/}
            <div>
                <Container>
                    <Row >
                        <Col  className="cols left-col">
                            <InputGroup size="lg" >
                                <Form.Control
                                              aria-label="Large"
                                              aria-describedby="inputGroup-sizing-sm"
                                              placeholder="Имя ребёнка"
                                />
                            </InputGroup>
                        </Col>
                        <Col  className="cols right-col">
                            <InputGroup size="lg" >
                                <Form.Select
                                    aria-label="Default select example"
                                     >
                                    <option>Выберите пол ребёнка</option>
                                </Form.Select>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="cols left-col">
                            <InputGroup size="lg" >
                                <Form.Control
                                              aria-label="Large"
                                              aria-describedby="inputGroup-sizing-sm"
                                              placeholder=""
                                />
                            </InputGroup>
                        </Col>
                        <Col className="cols right-col">
                            <InputGroup size="lg" >
                                <Form.Select
                                    aria-label="Default select example"
                                >
                                    <option>Выберите предмет</option>
                                </Form.Select>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/*больше поле для просмотра результата
            и редактирования дял результата*/}
            <div className="textArea">
                <form>
                    Добрый день,
                    <input className="text-input" type="text" id="name" placeholder="Имя родителя"/>!
                    <br/> связи <input className="text-input" type="text" id="name" placeholder="Ваше имя"/>, я преподаватель (предмета) школы RTS.
                    <br/> Хочу поделиться успехами (Имя ребенка) на уроках.
                    <br/>Мы провели 4 урока и (Имя ребенка) научился/лась _________.

                    У _________ хорошо получается _________.
                    <br/><br/><input type="checkbox" id="" name=""/>Также он/а очень внимателен/а и старателен/а.
                    <br/><input type="checkbox" id="" name=""/>Также он/а очень творчески подходит к заданиям и не боится экспериментировать.
                    <br/><input type="checkbox" id="" name=""/>Также он/а отлично работает самостоятельно.
                    <br/><br/><input type="checkbox" id="" name=""/>Есть несколько моментов, на которые (Имя ученика) нужно обратить больше внимания:
                    <br/><input type="checkbox" id="" name=""/>	тема ______ далась сложнее остальных, нам нужно уделить ей больше внимания
                    <br/><input type="checkbox" id="" name=""/>	______ испытывает сложности с изучением некоторых тем. Рекомендую ______.
                    <br/><input type="checkbox" id="" name=""/>	домашнее задание: _____ не всегда выполняет его, а без закрепления материала он может очень быстро забываться.
                    <br/><input type="checkbox" id="" name=""/>	______ иногда позже подключается к уроку, из-за чего мы не всегда успеваем полноценно провести урок, это может влиять на эффективность обучения.
                    <br/><br/>(Имя ученика) всегда активен/а на уроках,чувствуется, что ей/ему нравится заниматься
                    <br/>На следующих занятиях мы хотим сделать упор на _________.
                    Есть ли у вас какие-то вопросы или пожелания по нашим занятиям?



                </form>
            </div>

            {/*кнопка генерации текста*/}
            <div className="d-grid gap-2 button">
                <Button  variant="primary" size="lg"  >
                    Сгенерировать
                </Button>
            </div>


            {/*текстареа для результата*/}
            <div className="result-textArea">
                <InputGroup size="lg">
                    <Form.Control as="textarea"
                                  aria-label="Large"
                                  aria-describedby="inputGroup-sizing-sm"

                    />
                </InputGroup>
            </div>
        </div>
    );
};

export default os;