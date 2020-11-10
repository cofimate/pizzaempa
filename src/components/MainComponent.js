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
        const lastempanada= this.props.empanadas.length-1;
        const lastpizza= this.props.pizzas.length-1;
        const lastrecipe = this.props.emparecipes.length-1;
    
    
        const HomePage = () => {
            return (
                <Home
                    empanada={this.props.empanadas[lastempanada]}
                    pizza={this.props.pizzas[lastpizza]}
                    emparecipe={this.props.emparecipes[lastrecipe]}
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