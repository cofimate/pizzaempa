import React, { Component } from 'react';
import CartComponent from './CartComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import EmpaInformational from './PizzaInformationalComponent';
import PizzaInformational from './PizzaInformationalComponent';

import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        pizzas        : state.pizzas,
        empanadas     : state.empanadas,
        pizzarecipes  : state.pizzarecipes,
        emparecipes   : state.emparecipes,
    }
}

class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home
                    empanada={this.props.empanadas.filter(empanada => empanada.featured)[this.props.empanadas.length-1]}
                    pizza={this.props.pizzas.filter(pizza => pizza.featured)[this.props.pizzas.length-1]}
                    emparecipe={this.props.emparecipes.filter(emparecipe => emparecipe.featured)[this.props.emparecipes.length-1]}
                 />
            );
        };

        const empaId = ({match}) => {
            return (
                <EmpaInformational 
                   empanada={this.props.empanadas.filter(empanada=> empanada.id === +match.params.mealId)[this.props.empanadas.length-1]}
                   emparecipe={this.props.emparecipe.filter(emparecipe => emparecipe.mealId === +match.params.mealId)}
               />
           );
       };
       
       
       const pizzaId = ({match}) => {
            return (
                <PizzaInformational 
                    pizza={this.props.pizza.filter(pizza => pizza.id === +match.params.mealId)[this.props.pizzas.length-1]}
                    pizzarecipe={this.props.pizzarecipe.filter(emparecipe => emparecipe.mealId === +match.params.mealId)}
                />
            );
        };  


        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' render={() => <Menu empanadas={this.props.empanadas} pizzas={this.props.pizzas} />} />
                    <Route path='/empainformational' component={this.props.emparecipes} />
                    <Route path='/pizzainformational' component={this.props.pizzarecipes} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' render={() => <About recipes={this.state.allrecipes} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default withRouter(connect(mapStateToProps)(Main));