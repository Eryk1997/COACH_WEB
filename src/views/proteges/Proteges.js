import React, { Component } from "react";
import men from "../../Pictures/proteges/men.png";
import "./Proteges.css";
export default class Proteges extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-gradient">
          <div className="row mr-0">
             
            <div className="m-5 col-2">
              <div class="card bg-secondary">
                <img src={men} class="card-img-top" alt="..." />
                <div class="card-body text-center text-warning">
                  <h5 class="card-title">Imie Nazwisko</h5>
                  <p class="card-text">Opis konta</p>
                  <button type="button" className="btn btn-outline-warning">
                    Przejdź do konta
                  </button>
                </div>
              </div>
            </div>
            
            
            <div className="m-5 col-2">
              <div class="card bg-secondary">
                <img src={men} class="card-img-top" alt="..." />
                <div class="card-body text-center text-warning">
                  <h5 class="card-title">Imie Nazwisko</h5>
                  <p class="card-text">Opis konta</p>
                  <button type="button" className="btn btn-outline-warning">
                    Przejdź do konta
                  </button>
                </div>
              </div>
            </div>

            
            <div className="m-5 col-2">
              <div class="card bg-secondary">
                <img src={men} class="card-img-top" alt="..." />
                <div class="card-body text-center text-warning">
                  <h5 class="card-title">Imie Nazwisko</h5>
                  <p class="card-text">Opis konta</p>
                  <button type="button" className="btn btn-outline-warning">
                    Przejdź do konta
                  </button>
                </div>
              </div>
            </div>


            <div className="m-5 col-2">
              <div class="card bg-secondary">
                <img src={men} class="card-img-top" alt="..." />
                <div class="card-body text-center text-warning">
                  <h5 class="card-title">Imie Nazwisko</h5>
                  <p class="card-text">Opis konta</p>
                  <button type="button" className="btn btn-outline-warning">
                    Przejdź do konta
                  </button>
                </div>
              </div>
            </div>

            
            <div className="m-5 col-2">
              <div class="card bg-secondary">
                <img src={men} class="card-img-top" alt="..." />
                <div class="card-body text-center text-warning">
                  <h5 class="card-title">Imie Nazwisko</h5>
                  <p class="card-text">Opis konta</p>
                  <button type="button" className="btn btn-outline-warning">
                    Przejdź do konta
                  </button>
                </div>
              </div>
            </div>s

          </div>
        </header>
      </div>
    );
  }
}
