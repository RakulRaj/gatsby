import React from "react";
import "./board.css";

export default class Board1 extends React.Component {

    render() {
        return (
            <div class="wrapper">
    <div class="card"><img src="https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&amp;fit=crop&amp;w=750&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
        <div class="info">
            <h1>Road</h1>
            <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p><button>Read More</button>
        </div>
    </div>
    <div class="card"><img src="https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&amp;fit=crop&amp;w=750&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
        <div class="info">
            <h1>Road</h1>
            <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p><button>Read More</button>
        </div>
    </div>
    <div class="card"><img src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&amp;fit=crop&amp;w=311&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
        <div class="info">
            <h1>Protester</h1>
            <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p><button>Read More</button>
        </div>
    </div>
</div>)
    }
}