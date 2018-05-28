import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Headers, Http, RequestOptions, Request, RequestMethod } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Config } from './config.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class VehicleService {

	private branchApiUrl = Config.api+'/vehicles';
	private headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});

	constructor(private http: HttpClient) { }

	all(): Observable<any> {  
		return this.http.get(this.branchApiUrl);
    }

	add(vehicleDetails): Observable<any> {
		return this.http.post(this.branchApiUrl, vehicleDetails);
	}

}
