exports.GITHUB = {
    oauth_uri: 'https://github.com/login/oauth/authorize',
    access_token_url: 'https://github.com/login/oauth/access_token',
    // 获取 github 用户信息 url // eg: https://api.github.com/user?access_token=******&scope=&token_type=bearer
    user_url: 'https://api.github.com/user',

    // 生产环境
    redirect_uri: 'http://www.qq.com/',
    client_id: '1f99912897fca2ee4a6b',
    client_secret: 'ac465928689128a8588c09d637e025d2ef360414',

    // // 开发环境
    // redirect_uri: "http://localhost:3001/",
    // client_id: "*****",
    // client_secret: "*****",
};