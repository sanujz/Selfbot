module.exports = {
    description: 'https://appembed.netlify.app/e?description=Type%20VARnm%20to%20scare%20somebody%20by%20flashing%20their%20screen%20with%20NIGHTMARE%20WAKE%20UP%20then%20deleteing%20it%20soon%20after&provider=La%20selfbot&author=VARnm&image=&color=%23FF0000',
    run: async (client, message, handler, prefix, MyID) => {
        if (!message.author.id === MyID) return
        message.delete();
        try {
            const sentMessage = await message.channel.send(`
# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE# NIGHTMARE\n# WA UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE\n# WAKE UP\n# NIGHTMARE# NIGHTMARE
\n# WAKE UP\n # NIGHTMARE`);
            setTimeout(() => {
                sentMessage.delete().catch(console.error);
            })
        } catch (err) {
            return console.log(err)
        }
    }
};