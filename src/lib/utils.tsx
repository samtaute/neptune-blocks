import TemplateDailyBrief from '../components/TemplateDailyBrief';
import entertainmentData from '../../data/softbox-api/entertainment.json';
import newsData from '../../data/softbox-api/news.json';
import standardData from '../../data/softbox-api/standard.json'
import { LookbookItem } from "../types/softbox";

//App Logic
export function getCategoriesFromKeyword(keyword: string){
    //todo implement logic
    console.log(keyword)
    return ['news', 'entertainment', 'standard']
}


export function chooseTemplate(platform: string, language: string, keyword:string){
    //todo implement logic
    console.log(platform, keyword, language)
    return <TemplateDailyBrief content={{}}/>
}

/////API functions


export async function fetchSoftboxContent(category: string, language: string){
// todo implement logic
    if(category === 'news'){
        return extractItems(newsData.items as LookbookItem[], language);
    }else if (category === 'entertainment'){
        return extractItems(entertainmentData.items as LookbookItem[], language); 
    }else return extractItems(standardData.items as LookbookItem[], language); 

}

//Returns clean data from a raw softbox feed.
export function extractItems(rawItems: LookbookItem[], language: string){
    let shortenedLang: string = language.substring(0,2); 

    //checks if rawItems support language requested, and if not, switch to a supported language. 
    const supportedLangs = rawItems[0]['title'] as object; 
    if (!Object.prototype.hasOwnProperty.call(supportedLangs, shortenedLang)){
        shortenedLang = Object.keys(rawItems[0]['title'])[0];
        console.log('missing language')
    }

    return rawItems.map((item)=>{
        return {
            title: item['title'][shortenedLang],
            description: item.summary?.[shortenedLang],
            owner: item['owner'],
            brandLogo: item.brandLogo,
            brandLogoDark: item.brandLogoDark,
            wideImage: item.previews[1]?.link, //todo why are some links not available?
            link: item.link,
        }
    })
}
