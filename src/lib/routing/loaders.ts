import { LoaderFunctionArgs} from 'react-router-dom'
import { fetchSoftboxContent } from '../softbox-api/fetchSoftboxContent';


//Sets up all the content libaries necessary to render a feed.
export async function feedLoader({params}: LoaderFunctionArgs<{platform: string, language: string, keyword: string}>){
    const {keyword, language } = params; 

    //todo: what do i want to return if no data
    if(!keyword || !language){
        return; 
    }

    const cats = getCategoriesFromKeyword(keyword!) //returns ['news', 'entertainment', 'standard'] for now

    const data: {[key: string]: object} = {}

    for (const cat of cats){
        const content = await fetchSoftboxContent(cat, language)
        if(content){
            data[cat] = content
        }   
    }
    return data; 
}

export async function pageLoader(){


}




// ---------------------------------------//
// HELPER FUNCTIONS
// ---------------------------------------//

function getCategoriesFromKeyword(keyword: string){
    //todo implement logic
    console.log(keyword)
    return ['news', 'entertainment', 'standard']
}
