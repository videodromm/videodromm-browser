"use strict";

const shaders = [
  {
    'id': 'acidatthedisco',
    'name': 'Acid at the disco',
    'status': 'pass',
    'text': `void main(void)
{
	vec2 uv = iZoom * gl_FragCoord.xy / iResolution.xy;
	float time = iGlobalTime;
	float depth = sin(uv.y*2.0+sin(time)*1.5+1.0+sin(uv.x*3.0+time*1.2))*cos(uv.y*2.0+time)+sin((uv.x*3.0+time));
	float texey = (uv.x-0.5);
	float xband = sin(sqrt(uv.y/uv.y)*16.0/(depth)+time*3.0);
	float final = (
		sin(texey/abs(depth)*32.0+time*16.0+sin(uv.y*uv.x*32.0*sin(depth*3.0)))*(depth)*xband
	);

	
	fragColor = vec4(-final*abs(sin(time)),(-final*sin(time)*2.0),(final),1.0)*1.5;
}`,
    'image': 'acidatthedisco.jpg',
    'cover': 'acidatthedisco-cover.jpg',
    'link': 'https://www.shadertoy.com/view/4sfXRB',
    'uniforms': [
      { 'name': 'iGlobalTime', 'type': 'F' },
      { 'name': 'iResolution', 'type': '2' },
    ],
  },
  {
    'id': '3beatheart',
    'name': 'BeatRice Heart',
    'status': 'pass',
    'text': `float map( in vec3 p )
{
  p.y -= 0.5*abs(p.x);
  float an = 0.5 - 0.5*sin(0.1*p.y + 5.0*iGlobalTime);
  an = pow(an, 10.0);
  float r = 1.0 - 0.1 * an;
  return length(p) - r;
}

void main( void )
{
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
    vec2 p = -1.0 + 2.0*uv;
    p.x *= iResolution.x / iResolution.y;
  vec3 col = vec3(0.0);
    // camera origin
    vec3 ro = vec3(0.0,0.0,2.0);
    // ray direction
    vec3 rd = normalize(vec3(p,-1.0));
    float tmax = 20.0;
    float h = 0.001;
    float t = 0.0;
    for (int i = 0; i<100; i++)
  {
      if (h<0.001 || t>tmax) break;
      h = map( ro + t*rd );
      t += h;
  }  
    if (t<tmax)
    {
        vec3 pos = ro + t*rd; 
        vec2 eps = vec2(0.0001,0.0);
        vec3 nor = normalize(vec3(map(pos+eps.xyy) - map(pos-eps.xyy),
           map(pos+eps.yxy) - map(pos-eps.yxy),
           map(pos+eps.yyx) - map(pos-eps.yyx) ) );   
      col = vec3(iColor.r, iColor.g, iColor.b);  
        vec3 lig = vec3(0.5773);
        col *= clamp( dot (nor,lig), 0.0, 1.0);
        col += vec3(0.2,0.5,1.0)*clamp( nor.y, 0.0, 1.0);
        col += 0.1;
    }
  gl_FragColor = vec4(col,1.0);
}`,
    'image': 'beatriceheart.jpg',
    'cover': 'beatriceheart-cover.jpg',
    'link': 'https://www.shadertoy.com/view/Xt2GWG',
    'uniforms': [
       { 'name': 'iGlobalTime', 'type': 'F' },
      { 'name': 'iResolution', 'type': '2' },
    ],
  }
];

export default shaders;
