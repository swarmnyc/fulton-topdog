import { Request, Response, NextFunction } from 'fulton-server';

export function topdogAuthMiddleware(req: Request, res: Response, next: NextFunction) {

	
		// check if request as a session Cookie, add user info to context.

		// if (null != req.cookies.sessionId)  {
			// Set the user in user Manager
			// req.fultonApp.userService.currentUser =
		// }

		// Creat

		// // Set a new cookie with the name
		// res.setHeader('Set-Cookie', cookie.serialize('sessionId', new Date().getTime(), {
		// 	httpOnly: true,
		// 	maxAge: 60 * 60 * 24 * 7 // 1 week
		// }));

		next();
	

}
