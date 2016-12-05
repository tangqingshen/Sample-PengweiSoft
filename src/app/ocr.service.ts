import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
import { Transfer } from 'ionic-native';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class OcrService {
    constructor( ) {

    }

    getInfo(imageinfo: any) {
        console.log(imageinfo);
        // 名片全能王的 web 接口，请用你自己的 user 和 pass 替换这里的。
        let url = "http://bcr2.intsig.net/BCRService/BCR_VCF2?PIN=11111&user=xyp@szmstc.com&pass=GWS5A4P7Y5CD4HRR&json=1&lang=2&size=" + imageinfo.filesize;
    
        let transfer = new Transfer(); 
 
        var options = {
                fileKey: "file",
                fileName: imageinfo.filepath.substr(imageinfo.filepath.lastIndexOf('/') + 1),
                chunkedMode: false,
                mimeType: "image/jpeg"
            };
        
        return transfer.upload(imageinfo.filepath, url, options); 
    } 
}