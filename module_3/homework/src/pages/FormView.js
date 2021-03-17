import React from 'react';

import { Button, Input, Textarea } from '../components/Form';
import './assets/css/form-view.css';

function FormView() {
    return (
        <div className="form-view">
            <div>
                <h1>Form View - zadania 1-3</h1>
                <h2>Zadanie 1 + modyfikacje</h2>
                <p>Button component with defined style props</p>
                <Button background="red" color="yellow">Test</Button>

                <p>Button component with pre-defined style props</p>
                <Button>Test2</Button>

                <p>Button component with fontawesome Icon</p>
                <Button icon="user">Test 3</Button>
            </div>
            <div>
                <h2>Zadanie 2</h2>
                <p>Input ze zdefiniowanym propsem zbiorowym dla border</p>
                <Input 
                    background="orange" 
                    color="blue" 
                    border="5px solid red" 
                    bradius='15px' 
                    placeholder="Input z propsami" 
                />

                <p>Input z wytycznymi z zadania</p>
                <Input 
                    background="blue" 
                    color="orange" 
                    bsize="10px" 
                    bcolor="red" 
                    bstyle="dotted" 
                    bradius='5px' 
                    placeholder="Input z propsami" 
                />

                <p>Textarea</p>
                <Textarea 
                    background="yellow" 
                    color="green" 
                    bsize="10px" 
                    bcolor="red" 
                    bstyle="dashed" 
                    bradius='10px' 
                    placeholder="Tekst do textarea" 
                />
            </div>
        </div>
    );
}

export default FormView;