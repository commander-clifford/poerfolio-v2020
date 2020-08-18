import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { createClient, Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const CONFIG = {
  space: '7ajvyg0idzck',
  accessToken: 'MVz7rhZtdN20AXA0K4WGHdKV2H3imbv9B8PtmjBdF8I',
  accessPreviewToken: 'LoVFKsPlKMSbwOKCLp015dfSWIuJ6YhxHJECAERJF-Y',
}

@Injectable({
  providedIn: 'root'
})

export class ContenfulApiService {

  private cdaClient = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
    space: CONFIG.space,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: CONFIG.accessToken
  })

  constructor() { }

  public getBlogPosts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'blogPost',
      // order: '-fields.displayOrder',
      limit: 10,
    }, query))
    .then(response => response.items);
  }

  public getProjects(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'project',
      order: '-fields.displayOrder',
      limit: 10,
    }, query))
    .then(response => response.items);
  }



  public getProjectBySlug(slug?: string): Promise<Entry<any>> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'project',
      'fields.slug[in]': slug,
    }))
    .then(response => response.items[0])
  }

  public getProjectByOrderId(id?: number): Promise<Entry<any>> {
    console.log('getProjectByOrderId',id);
    return this.cdaClient.getEntries(Object.assign({
      content_type: 'project',
      'fields.displayOrder': id,
    }))
    .then(response => response.items[0])
  }



}
