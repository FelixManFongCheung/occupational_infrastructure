import {supabase} from '../../lib/supabase'

export async function getImages() {
    const {data, error: signedUrlError} = await supabase.storage.from('test').createSignedUrl('test1.png', 3600 * 24 * 60);
    console.log(data);
    return data.signedUrl;
}