 // Author:  
// Title:   
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iGlobalTime;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;

void main() {
    vec2 st = gl_FragCoord.xy/iResolution.xy;
    st.x *= iResolution.x/iResolution.y;
	vec4 tex0 = texture2D(iChannel0,st);
    vec4 tex1 = texture2D(iChannel1,st);
    st += vec2(.0);
    vec3 color = vec3(1.);
    color = vec3(tex0.x,sin(iGlobalTime),tex1.y);

    gl_FragColor = vec4(color,1.0);
}