import { AccessToken, IUser, IUserRegister } from 'fulton-server';
import { IUserService } from 'fulton-server';


export class HotdogUser implements  IUser{
}

export class HotdogUserService implements IUserService<HotdogUser>{
	loginByAccessToken(token: string): Promise<HotdogUser> {
		throw new Error("Method not implemented.");
	}
	currentUser: IUser;

	login(username: string, password: string): Promise<HotdogUser> {
		return undefined;
	}

	loginByOauth(token: AccessToken, profile: any): Promise<HotdogUser> {
		return undefined;
	}

	findByAccessToken(token: string): Promise<HotdogUser> {
		return undefined;
	}

	register(user: IUserRegister): Promise<HotdogUser> {
		return undefined;
	}

	issueAccessToken(user: HotdogUser): Promise<AccessToken> {
		return undefined;
	}

	refreshAccessToken(token: string): Promise<AccessToken> {
		return undefined;
	}

}