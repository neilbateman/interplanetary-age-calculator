import $ from 'jquery';
import './css/styles.css';
import { SpaceAge } from './spaceage.js';


$(document).ready(function() {
$("#getAge").submit(function(event) {
  event.preventDefault();
  const year = parseInt($("#year").val());
  const month = parseInt($("#month").val());
  const day = parseInt($("#day").val());
  let spaceAge = new SpaceAge(`${year}-${month}-${day}`);
    $(".result").show();
  $(".result").append(spaceAge.mercuryAge());
  // $(".result").append(spaceAge.venusAge());
  // $(".result").append(spaceAge.marsAge());
  // $(".result").append(spaceAge.jupiterAge());

});
});
