const getMember = (id) => {
    const { client } = require('../ICOCteen.ts');
    const guild = client.guilds.cache.get('698590629344575500')
    return guild.members.cache.get(id);
}
exports.getMember = getMember;