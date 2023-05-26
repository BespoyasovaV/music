import { useEffect, useState } from "react";
import "./Gray.css";
import React from 'react';
function Gray() {

    const [name, setName] = useState();
    const [mes, setMes] = useState();
//useeffect
useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((response) => response.json()).then(response => setName(response.name))

},[])

useEffect(()=>{
var xhr = new XMLHttpRequest()
xhr.open(
  'GET',
  'http://www.mocky.io/v2/5944e07213000038025b6f30',
  true
)
xhr.send()

xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) {
    return
  }

  if (xhr.status === 200) {
    console.log('result', JSON.parse(xhr.responseText)[0])
    const us=JSON.parse(xhr.responseText)[0];
   setMes( us.title);
  } else {
    console.log('err', xhr.responseText)
  }
}
},[])
    return (
        <div class="grey">
            <h2 class="cu">Fill in your details</h2>
            <div class="blokkon">
                <div class="kon1">
                    <div class="tkon">Name</div>
                    <div class="tkon1">{name}</div>
                    <div class="tkon2"></div>

                </div>
                <div class="kon1">

                    <div class="tkon">Email</div>
                    <div class="tkon1">johndoe2347@mail.com</div>
                    <div class="tkon2"></div>
                </div>
                <div class="kon1">

                    <div class="tkon" >Message</div>
                    <div class="tkon1">{mes}</div>
                    <div class="tkon2"></div>

                </div>
                <div class="kon1"><button class="btnkon">Submit</button></div>

            </div>


        </div>
    )
}
export default Gray;