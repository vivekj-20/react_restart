import { Component } from "react";

class Comp extends Component {  
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
              name: "Dummy",
              location: "Default",
            },
          };
          console.log(this.props.name + "Child Constructor");
        }
    async componentDidMount() {
        console.log(this.props.name + "Child Component Did Mount");
        //Api call
    
        const data = await fetch("https://api.github.com/users/vivekj-20");
        const json = await data.json();
    
        this.setState({
          userInfo: json,
        });
    
        console.log(json);
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render(){
        const { name, bio, avatar_url } = this.state.userInfo;
        console.log ("renderChild");
        return(
            <div className="user-card">
                <h1>I Love {this.props.libname}</h1>
                <h2>{this.props.Home}</h2>
                <h1>My name is {name} </h1>
                <h2>{bio}</h2>
                <img src={avatar_url} />
            </div>
        )
    }

}

export default Comp;

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *  Parent Constructor
    About.js:15 renderParent
    classComponent.js:13 undefinedChild Constructor
    classComponent.js:35 renderChild
    classComponent.js:16 undefinedChild Component Did Mount
    About.js:11 Parent Component Did Mount
    Header.js:12 Hurry!!!
    classComponent.js:26 {login: 'vivekj-20', id: 92218139, node_id: 'U_kgDOBX8jGw', avatar_url: 'https://avatars.githubusercontent.com/u/92218139?v=4', gravatar_id: '', …}
    classComponent.js:35 renderChild
 *
 */