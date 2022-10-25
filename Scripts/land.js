// Creating Scene.
const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x00284d);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



// Grid

const grid = new THREE.GridHelper( 20, 20, 0x888888, 0x444444 );
scene.add( grid );

// // Setting space for metaverse
// const geometry_space = new THREE.BoxGeometry(75, 0.4, 25);
// const material_space = new THREE.MeshBasicMaterial({ color: 0x00ffff });
// const space = new THREE.Mesh(geometry_space, material_space);
// space.position.set(10, 0, 0);
// scene.add(space);

// Setting plot 1 for metaverse
const plot1_geometry = new THREE.BoxGeometry(5, 1, 5);
const plot1_material = new THREE.MeshBasicMaterial({ color: 0x00b300 });
const plot1 = new THREE.Mesh(plot1_geometry, plot1_material);
plot1.position.set(-3.5, 1, 5);
scene.add(plot1);

// Setting plot 2 for metaverse
const plot2_geometry = new THREE.BoxGeometry(5, 1, 5);
const plot2_material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const plot2 = new THREE.Mesh(plot2_geometry, plot2_material);
plot2.position.set(2, 1, 5);
scene.add(plot2);

// Setting plot 3 for metaverse
const plot3_geometry = new THREE.BoxGeometry(5, 1, 5);
const plot3_material = new THREE.MeshBasicMaterial({ color: 0xBCD6A2 });
const plot3 = new THREE.Mesh(plot3_geometry, plot3_material);
plot3.position.set(-3.5, 1, -2);
scene.add(plot3);

// Setting plot 4 for metaverse
const plot4_geometry = new THREE.BoxGeometry(5, 1, 5);
const plot4_material = new THREE.MeshBasicMaterial({ color: 0xa2bcd6 });
const plot4 = new THREE.Mesh(plot4_geometry, plot4_material);
plot4.position.set(2, 1, -2);
scene.add(plot4);


camera.position.set( 0, 6, 15 );

// camera.position.set(10, 5, 40);
// camera.position.z = 5;


function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};
animate();

function mintNFT() {
    // Parameters to create a NFT in the Metaverse
    var _id = document.getElementById("id").value;
    
    // If Metamask is not available
    if (typeof window.ethereum == "undefined") {
        rej("You should install Metamask to use it!");
    }

    // Web3 Instance 
    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(abi, "0xb1613CEBFCCE54484aBbB603C0b2B5204B3F4bd2");

    web3.eth.getAccounts().then((accounts) => {
        contract.methods.mint(_id).send({ from: accounts[0] }).then((data) => {
            console.log("NFT available in the Metaverse!");
        });
    });

};