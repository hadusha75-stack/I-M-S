const fs = require("fs");
// const fs = require("fs-extra");

let modifiedData;
// fs.readFile('first.txt','utf-8',(err,data)=>{
//     if(err){
//         console.error("Error reading file:",err);
//         return;
//     }   
//     console.log("File content:",data);
//      modifiedData=data.toUpperCase();  
//     fs.writeFile('last.txt',modifiedData,(err)=>{
//         if(err){
//             console.error("Error writing file:",err);
//             return;
//         } 
//         console.log("File has been written successfully.");
//     });
// })  




// fs.readFile('last.txt','utf-8',(err,data)=>{
//     if(err){
//         console.error("Error reading file:",err);
//         return;
//     } 
//     console.log("File content:",data);
// })
// //utf-8 is a character encoding that represents text in computers. It allows for the representation of a wide range of characters from different languages and symbols. When you read or write files in Node.js, specifying 'utf-8' ensures that the content is interpreted as text rather than binary data.



// let data="This is the content of the file from fs.writeFile() method.";
// fs.writeFile("createdFile.txt",data,(err)=>{
//     if(err){
//         console.error("Error creating file:",err);
//         return;
//     }    console.log("File created successfully.\n",data);
// });




// fs.readFile("createdFile.txt", "utf-8", (err,data)=>{
//     if(err){
//         console.error("Error reading file:",err);
//         return;
//     }
//     console.log("File content:",data);
// });





// fs.writeFileSync("createdFile.txt","This is the updated content of the file from fs.writeFile() method.",(err)=>{
//     if(err){
//         console.error("Error updating file:",err);
//         return;
//     }
//     console.log("File updated successfully.");
// });




// fs.readFile("createdFile.txt", "utf-8", (err,data)=>{
//     if(err){
//         console.error("Error reading file:",err);
//         return;
//     }
//     console.log("File content:",data);
// });





// fs.appendFile("createdFile.txt","\nThis is the appended content of the file from fs.appendFile() method.",(err)=>{
//     if(err){
//         console.error("Error appending to file:",err);
//         return;
//     }
//     console.log("Content appended successfully.");
// });





// fs.readFile("createdFile.txt", "utf-8", (err,data)=>{
//     if(err){
//         console.error("Error reading file:",err);
//         return;
//     }
//     console.log("File content:",data);
// });





// fs.unlink("createdFile.txt",(err)=>{
//     if(err){
//         console.error("Error deleting file:",err);
//         return;
//     }   console.log("File deleted successfully.");  
// })





  // fs.mkdir("newFolder",{recursive: true},(err)=>{
  //     if(err){
  //         console.error("Error creating directory:",err);
  //         return;
  //     }
  //     console.log("Directory created successfully.");
  // });
  //{recursive: true} is an option that can be passed to the fs.mkdir() method in Node.js. It allows for the creation of nested directories. If the specified directory path includes parent directories that do not exist, setting recursive to true will create those parent directories as well. This is useful when you want to create a directory structure without having to manually create each parent directory beforehand.





  // fs.rmdir("newFolder",(err)=>{
//     if(err){
//         console.error("Error deleting directory:",err);
//         return;
//     }
//     console.log("Directory deleted successfully.");
// })

// fs.rmdir("newFolder",{recursive: true},(err)=>{
//     if(err){
//         console.error("Error deleting directory:",err);
//         return;
//     } 
//     console.log("Directory deleted successfully.");
// })
//{recursive: true} is an option that can be passed to the fs.rmdir() method in Node.js. It allows for the deletion of a directory and all of its contents, including subdirectories and files. When recursive is set to true, the method will remove the specified directory along with everything inside it. This is useful when you want to delete a directory that contains files or other directories without having to manually delete each item first.   


// fs.readdir("./newFolder",(err,files)=>{
//     if(err){
//         console.error("Error reading directory:",err);
//         return;
//     } 
//     console.log("Files in the directory:",files);
// })



// fs.rename("createdFile.txt","renamedFile.txt",(err)=>{
//     if(err){
//         console.error("Error renaming file:",err);
//         return;
//     }
//     console.log("File renamed successfully.");
// })

// for checking if the file exists or not
// fs.access("renamedFile.txt",fs.constants.F_OK,(err)=>{
//     if(err){
//         console.error("File does not exist:",err);
//         return;
//     }
//     console.log("File exists.");
// });

const userData={
    name:"ashenafi hadush",
    age:25,
    email:"hadusha76@gmail.com",
    address:"Axum University, Tigray, Ethiopia"
};
const jsonData=JSON.stringify(userData,null,2);  

// fs.writeFile("fileJson.json",jsonData,(err)=>{
//     if(err){
//         console.error("Error writing JSON file:",err);
//         return;
//     }
//     console.log("JSON file written successfully.");
// });

// fs.readFile("fileJson.json","utf-8",(err,data)=>{
//     if(err){
//         console.error("Error reading JSON file:",err);
//         return;
//     }
//     console.log("data:",data);
//     const parsedData=JSON.parse(data);
//     console.log("Parsed JSON data:",parsedData);
// })



// fs.copyFile("fileJson.json","copiedFileJson.json",(err)=>{
//     if(err){
//         console.error("Error copying file:",err);
//         return;
//     }
//     console.log("File copied successfully.");
// })  


// fs.rename("copiedFileJson.json","renamedFileJson.json",(err)=>{
//     if(err){
//         console.error("Error renaming file:",err);
//         return;
//     }
//     console.log("File renamed successfully.");
// } );
// fs.rename("renamedFileJson.json","newFolder/fileJson.json",(err)=>{
//     if(err){
//         console.error("Error renaming file:",err);
//         return;
//     }   console.log("File renamed successfully.");    
// } );


// fs.move("newFolder/fileJson.json", "movedFileJson.json", (err) => {
//     if (err) {
//         console.error("Error moving file:", err);
//         return;
//     }

//     console.log("File moved successfully.");
// });
// fs.move() is a method provided by the fs-extra library in Node.js. It is used to move a file from one location to another. The method takes three arguments: the source path of the file to be moved, the destination path where the file should be moved to, and a callback function that is called when the operation is complete. If there is an error during the move operation, it will be passed to the callback function as an argument. If the move is successful, a success message will be logged to the console. 



// fs.stat("movedFileJson.json",(err,stat)=>{
//     if(err){
//         console.error("Error getting file stats:",err);
//         return;
//     }
//     console.log("File stats:",stat);
//     console.log("Is it a file?",stat.isFile());
//     console.log("Is it a directory?",stat.isDirectory());
// })


// fs.watch("newFolder",(eventType,filename)=>{
//     console.log(`File ${filename} has been ${eventType}`);
// })


// fs.chmod("movedFileJson.json",0o777,(err)=>{
//     if(err){
//         console.error("Error changing file permissions:",err);
//         return;
//     }
//     console.log("File permissions changed successfully.");
// })

fs.chmod("movedFileJson.json",0o444,(err)=>{
    if(err){
        console.error("Error changing file permissions:",err);
        return;
    }
    console.log("File permissions changed successfully.");
})




// Code	    Meaning	                                Explanation
// 0o777	Full access for everyone	            Read, write, execute
// 0o755	Owner full, others read+execute	        Common for folders/programs
// 0o700	Only owner can access	                Private files
// 0o644	Owner read/write, others read only	    Common text files
// 0o666	Everyone can read/write	                No execute
// 0o444	Read-only for everyone	                Cannot modify
// 0o000	No permissions	                        Nobody can access


