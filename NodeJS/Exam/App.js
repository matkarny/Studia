const yargs = require('yargs');
const fs = require('fs');
var _ = require('lodash');

const {
    getNote,
    createNote,
} = require('./server-functions');

const createCommand = {
    command: 'add',
    describe: 'Add note (to add note type --note yournote --group groupname)',
    handler: async args => {
        try {
            let data = await getNote();
            let tabela = data.map(n => n.id)
            let number = _.max(tabela)
            if (number === undefined) {
                number = 1
            } else {
                number = number + 1
            }

            data.push({
                note: args.note,
                status: "active",
                group: args.group,
                id: number
            });
            await createNote(data);
            console.log(`Note has been added with id ${number}`)
        } catch (error) {
            console.log(error.message);
        }


//         console.log(note)
    }
};

const updateCommand = {
    command: 'change',
    describe: 'Change status of note (to change status type --id number)',
    handler: async args => {
        try {
            let note = await getNote();
            let theNote = _.find(note, {id: args.id});
            if (theNote.status === "active") {
                theNote.status = "complete"
            } else {
                theNote.status = "active"
            }


            await createNote(note)
            console.log(`Note id ${args.id} has changed status to ${theNote.status}`)
        } catch (error) {
            console.log(error.message);
        }
    }
}

const updateGroupCommand = {
    command: 'group',
    describe: 'Change group (to change group type --group yourgroupname)',
    handler: async args => {
        try {
            let note = await getNote();
            let theNote = _.find(note, {id: args.id});
            theNote.group = args.group;
            await createNote(note)
            console.log(`Note id ${args.id} has changed group to ${theNote.group}`)

        } catch (error) {
            console.log(error.message);
        }
    }
};
const deleteCommand = {
    command: 'delete',
    describe: 'Delete note (to delate type --id number)',
    handler: async args => {
        try {
            let note = await getNote();
            note = note.filter(n => n.id !== args.id);
            await createNote(note)
            console.log(`Note id ${args.id} is delete`)
        } catch (error) {
            console.log(error.message);
        }
    }
};


const getCommand = {
    command: 'get',
    describe: 'Get user data (for single type --id number, for all type --id all',
    handler: async args => {
        try {
            if (args.id === "all") {
                const notes = await getNote();
                notes.forEach(note => {
                    console.log(`Id ${note.id}. Note: "${note.note}"  -status: ${note.status}`)
                })
            } else {
                const note = await getNote();
                let theNote = _.find(note, {id: args.id});
                console.log(`Note: ${theNote.note}  -status: ${theNote.status}`);
            }

        } catch (error) {
            console.log(error.message);
        }
    }
};

const filterStatusCommand = {
    command: 'statusfilter',
    describe: 'Get filtred status data (for type --status active/complete, for all type --status all)',
    handler: async args => {
        try {
            const notes = await getNote();
            if (args.status === "all") {
                notes.forEach(note => {
                    console.log(`Id ${note.id}. Note: "${note.note}"  -status: ${note.status}`)
                })
            } else if (args.status === "active") {
                notes.filter(note => note.status === "active").forEach(note => {
                    console.log(`Id ${note.id}. Note: "${note.note}"  -status: ${note.status}`)
                })
            } else {
                notes.filter(note => note.status === "complete").forEach(note => {
                    console.log(`Id ${note.id}. Note: "${note.note}"  -status: ${note.status}`)
                })
            }
        } catch (error) {
            console.log(error.message);
        }
    }
};
const filterGroupCommand = {
    command: 'groupfilter',
    describe: 'Get filtred group data (for certain type --group groupname, for all type --group all)',
    handler: async args => {
        try {
            const notes = await getNote();
            if (args.group === "all") {
                notes.forEach(note => {
                    console.log(`Id ${note.id}. Note: "${note.note}"  -group: ${note.group}`)
                })
            } else if (args.group !== "all" && notes.filter(note => note.group === args.group).length > 0) {
                notes.filter(note => note.group === args.group).forEach(note => {
                    console.log(`Id ${note.id}. Note: "${note.note}"  -group: ${note.group}`)
                })
            } else {
                console.log("Typed group doesn't exist")
            }

        } catch (error) {
            console.log(error.message);
        }
    }
};
const downloadCommand = {
    command: 'download',
    describe: 'Download data from server to local file',
    handler: async args => {
        try {
            const notes = await getNote();
            fs.writeFile('notes.json', JSON.stringify(notes, null, "\t"), () => {
            });
            console.log("Note is downloaded to file 'notes.json'")
        } catch (error) {
            console.log(error.message);
        }
    }
};
const uploadCommand = {
    command: 'upload',
    describe: 'Upload local data to server',
    handler: async args => {
        try {
            let notes = JSON.parse(fs.readFileSync('notes.json'));
            await createNote(notes)
            console.log("Local data is uploaded on server");
        } catch (error) {
            console.log(error.message);
        }
    }
};

yargs.command(createCommand)
    .command(deleteCommand)
    .command(getCommand)
    .command(updateCommand)
    .command(filterStatusCommand)
    .command(updateGroupCommand)
    .command(filterGroupCommand)
    .command(downloadCommand)
    .command(uploadCommand)
    .argv

