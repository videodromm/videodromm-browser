// https://www.shadertoy.com/view/4sfXRB
#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iGlobalTime;
uniform sampler2D iChannel0;
void main(void)
{
	vec2 uv =  gl_FragCoord.xy / iResolution.xy;
	vec4 tex = texture2D(iChannel0,uv);
	float depth = sin(uv.y*2.0+sin(iGlobalTime)*1.5+1.0+sin(uv.x*3.0+iGlobalTime*1.2))*cos(uv.y*2.0+iGlobalTime)+sin((uv.x*3.0+iGlobalTime));
	float texey = (uv.x-0.5);
	float xband = sin(sqrt(uv.y/uv.y)*16.0/(depth)+iGlobalTime*3.0);
	float final = (
		sin(texey/abs(depth)*32.0+iGlobalTime*16.0+sin(uv.y*uv.x*32.0*sin(depth*3.0)))*(depth)*xband
	);

	
	gl_FragColor = vec4(-final*abs(sin(iGlobalTime)),(-final*sin(iGlobalTime)*2.0),tex.x,1.0)*1.5;
}
