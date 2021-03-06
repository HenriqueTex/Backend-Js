import React from 'react';
import './styles.css';
import{FiLogIn} from 'react-icons/fi'

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
export default function logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src= {logoImg} alt="logo"/>

                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">entrar</button>

                    <a href="register">
                        <FiLogIn size={16} color="e02041"/>
                        Não tenho cadastro
                    </a>
                </form>
            </section>
            <img src= {heroesImg} alt="heroes"/>
        </div>
    );
}