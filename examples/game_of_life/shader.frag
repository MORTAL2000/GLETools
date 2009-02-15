uniform float width, height;
uniform sampler2D texture;

float get_neighbor(vec2 off){
    vec2 pos = gl_FragCoord.xy + off;
    vec2 coord = vec2(pos.x/width, pos.y/height);
    return texture2D(texture, coord);
}

void main(void){
    float n1 = get_neighbor(vec2(-1,-1));
    float n2 = get_neighbor(vec2( 0,-1));
    float n3 = get_neighbor(vec2( 1,-1));
    float n4 = get_neighbor(vec2(-1, 0));
    float self = get_neighbor(vec2( 0, 0));
    float n6 = get_neighbor(vec2( 1, 0));
    float n7 = get_neighbor(vec2(-1, 1));
    float n8 = get_neighbor(vec2( 0, 1));
    float n9 = get_neighbor(vec2( 1, 1));
    float neighbors = n1 + n2 + n3 + n4 + n6 + n7 + n8 + n9;

    if(self == 1){
        if(neighbors < 2){
            gl_FragColor = 0;
        }
        else if(neighbors > 3){
            gl_FragColor = 0;
        }
        else{
            gl_FragColor = 1;
        }
    }
    else{
        if(neighbors == 3){
            gl_FragColor = 1;
        }
    }
}
