
import express from "express";
import { MoviesController } from "./movies.controllers.js";
const moviesRouter= express.Router();
const moviesController= new MoviesController();


moviesRouter.post('/add',(req,res)=>{
    moviesController.addFavorite(req,res);
  });
moviesRouter.get('/getFavorite',(req,res)=>{
    moviesController.getFavlist(req,res);
  });


export default moviesRouter;  