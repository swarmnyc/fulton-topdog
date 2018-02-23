import { entityRouter, EntityRouter, Request, Response, inject,  } from 'fulton-server';
import { AuthorEntity } from '../entities/author-entity';
import { NextFunction } from 'express';
import { LruCache } from '../helpers/lru-cache';

@entityRouter("/api/authors", AuthorEntity)
export class AuthorEntityRouter extends EntityRouter<AuthorEntity> {
    constructor(private cache: LruCache) {
        super();
    }

    list(req: Request, res: Response, next: NextFunction)  {
        const userId = req.query.userId;
        if (this.cache.has(userId)){
            let result = this.cache.get(userId);
            res.send(result);
        }else{
            req.queryParams.pagination = {
                index: 0,
                size: this.app.options.settings.paginationSize
            };            
            this.entityService.find(req.queryParams).then((result)=>{
                console.log(result);
                this.cache.set(userId, result);
                res.send(result);
            })
        }
    }
}
