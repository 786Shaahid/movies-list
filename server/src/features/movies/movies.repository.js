import dotenv from 'dotenv';
dotenv.config();

export class MoviesRepository{
    async add({ title, year, type, posterUrl }) {
        try {
            const favorite = new Favorite({ title, year, type, posterUrl });
            await favorite.save();
            return favorite;
                // return response.data.Search;
        } catch (error) {
            throw error;
        }
    }    
   async get(){
     try {
         const list= await Favorite.find();
         return list;
     } catch (error) {
        console.log(error);
     }
   }

 

}