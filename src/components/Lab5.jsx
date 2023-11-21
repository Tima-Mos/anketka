import React from 'react';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {Container} from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";

const Lab5 = () => {
    function parceGrammar(){
        // Define the context-free grammar (CFG)
        const grammar = {
            expression: [
                ['term', '+', 'expression'],
                ['term']
            ],
            term: [
                ['factor', '*', 'term'],
                ['factor']
            ],
            factor: [
                ['(', 'expression', ')'],
                ['number']
            ],
            number: [
                ['0'],
                ['1'],
                ['2'],
                // Add more number productions if needed
            ]
        };

// Function to parse a string using the CFG
        function parseString(input) {
            const tokens = input.split(' ');
            let index = 0;

            // Function to parse a nonterminal symbol
            function parseNonterminal(nonterminal) {
                const productions = grammar[nonterminal];

                for (let production of productions) {
                    let success = true;
                    let children = [];

                    for (let symbol of production) {
                        if (grammar[symbol]) {
                            // Symbol is a nonterminal, recursively parse it
                            const result = parseNonterminal(symbol);
                            if (result.success) {
                                children.push(result.tree);
                            } else {
                                success = false;
                                break;
                            }
                        } else {
                            // Symbol is a terminal, match it with the input tokens
                            if (tokens[index] === symbol) {
                                children.push(tokens[index]);
                                index++;
                            } else {
                                success = false;
                                break;
                            }
                        }
                    }

                    if (success) {
                        return { success: true, tree: { [nonterminal]: children } };
                    }
                }

                return { success: false };
            }

            // Start with the start symbol 'expression'
            const result = parseNonterminal('expression');

            if (result.success && index === tokens.length) {
                return result.tree;
            } else {
                throw new Error('Invalid input string');
            }
        }

// Example usage
        const inputString = '2 + 3 * (4 + 5)';
        const parseTree = parseString(inputString);
        console.log(parseTree);
    }
    return (
        <div>
          <Container>
              <Row>
                  <Col style={{backgroundColor: "white", borderRadius: "0.375rem"}}>
                      <p>
                          G=([Q, A, B, C, D], [a, b, c], P, Q)
                          <br/>1. Q->acA|acB|ε;
                          <br/>2. B->A|Cb|ε;
                          <br/>3. A->Aa|Ab|a;
                          <br/>4. C->dCc;
                          <br/>5. D->dc;
                      </p>
                  </Col>
                  <Col>
                      <InputGroup size="md" >
                          <Form.Control
                              aria-label="Large"
                              aria-describedby="inputGroup-sizing-sm"
                              placeholder="Введите строчку"
                          />
                      </InputGroup>
                      <Button onClick={parceGrammar} variant="primary" size="md" style={{marginTop:"10px"}} >
                          Разложить
                      </Button>
                      <div style={{backgroundColor: "white", borderRadius: "0.375rem", marginTop:"10px"}}>
                          Popka
                      </div>

                  </Col>
              </Row>
          </Container>
        </div>
    );
};

export default Lab5;