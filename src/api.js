export default class NicoryApi {
  constructor(token) {
    if (!token) throw new Error('No token');
    this.token = token;
  }
  async getGuildInfo() {
    const guildInfo = await fetch(`${process.env.API_HOST}/public/auth/${this.token}`);
    if (guildInfo.status == 401) throw new Error("unauthorized");
    else return await guildInfo.json();
  }
}
