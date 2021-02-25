export class UserDto {

    public id: number = 0;

    public firstName: string | null = null;

    public secondName: string | null = null;

    public displayName: string | null = null;

    public login: string | null = null;

    public email: string | null = null;

    public phone: string | null = null;

    public avatar: string | null = null;

    public getFullUserInfo(): string | null {
        return [
            this.firstName ?? "",
            this.secondName ?? ""
        ]
            .join(" ")
            .trim() || null;
    }
}