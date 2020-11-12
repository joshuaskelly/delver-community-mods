#ifdef GL_ES
#define LOWP lowp
precision mediump float;
#else
#define LOWP 
#endif

varying vec2 v_texCoords;

uniform sampler2D u_texture;

vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction);

void main()
{
	vec4 color = texture2D(u_texture, v_texCoords);

	// Use luminosity method to covert to black and white
	float lum = color.r * 0.21 + color.g * 0.72 + color.b * 0.07;

   
    gl_FragColor = vec4(lum, lum, lum, 1.0);
}