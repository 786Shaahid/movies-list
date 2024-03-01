import { MoviesRepository } from "./movies.repository.js";

export class MoviesController{
   constructor(){
    this.moviesRepository= new MoviesRepository();
   } 
   async addFavorite(req, res) {
    try {
        const reqData = req.body.movie;
        const results = await this.moviesRepository.add(reqData);
        if( !results){
          return res.status(404).json({
            data:"",
            message:'',
            error:" Something went wrong !"
          })
        }
        res.status(200).json({message:"added ",error:'' ,data:''});
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
 async getFavlist(){
    try {
        const results = await this.moviesRepository.get(query);
        if( !results){
          return res.status(404).json({
            data:"",
            message:'',
            error:" Something went wrong !"
          })
        }
        res.status(200).json({message:"Get list ",error:'' ,data:results});
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
 }


}