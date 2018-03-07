import React from 'react';

const Pemain = props =>
<div className="container-fluid">    
                <div className="row">
                  <div className="col-sm-10 col-sm-offset-1">
                    <div className="panel panel-default text-center">
                      <div className="panel-heading">{`${props.strPlayer} (${props.strPosition})`}</div>
                      <div className="panel-body">
                        <div className="col-sm-2 col-sm-offset-1">
                            <img src={props.strThumb} alt={props.strPlayer} width="200px"/>
                        </div>
                        <div className="col-sm-8 col-sm-offset-1">
                            {props.strDescriptionEN}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
    

export default Pemain;

            

                  {/* const List = props =>
    <div className="list-container">
        <h4 className="card text-white bg-primary">{`${props.strPlayer} (${props.strPosition})`}</h4>
        <div>
            <img src={props.strThumb} alt={props.strPlayer}/>
            <p>{props.strDescriptionEN}</p>
        </div>
    </div>

export default List; */}