#ifdef GL_ES
#define LOWP lowp
precision mediump float;
#else
#define LOWP 
#endif


// The rendered 3D scene as a 2D texture
uniform sampler2D u_texture;

// The texture coordinates for the rendered 3D scene
varying vec2 v_texCoords;

// A color lookup table represented as a 1024 x 32 pixel 2D texture
uniform sampler2D u_shader_texture_1;

// Calculate the pixel dimensions of the lookup texture. This is used
// for clamping the lookup indices to the desired range.
float pixelWidth = 1.0 / 1024.0;
float halfPixelWidth = pixelWidth / 2.0;

float pixelHeight = 1.0 / 32.0;
float halfPixelHeight = pixelHeight / 2.0;

/*
/   Flattens out the given float to the given number of levels per unit
/
/   Params:
/       float channel: A float representing a color value. Should be in the 0.0 - 1.0 range.
/
/       float levels: The number of levels to reduce to. For example:
/           posterize(x, 4);
/
/           Will return one of the following: [0.0, 0.25, 0.5, 0.75]
/
/   Returns:
/       A float
*/
float posterize(float channel, float levels) {
    return floor(channel * levels) / levels;
}

/*
/   Returns a color from the color lookup table for the given color.
/
/   Params:
/       vec4 pixel: The color to use as an index into the color lookup table.
/
/   Returns:
/       A color
*/
vec4 colorLookup(vec4 pixel) {
    vec2 coords_lower_slice;
    vec2 coords_upper_slice;

    // Calculate RG indices
    float r = pixel.r / 32.0;
    r = clamp(r, halfPixelWidth, 32.0 * pixelWidth - halfPixelWidth);
    float g = pixel.g;
    g = clamp(g, halfPixelHeight, 32.0 * pixelHeight - halfPixelHeight);

    // Calculate a lower and upper B index
    float b_lower_slice = posterize(pixel.b, 32.0);
    float b_upper_slice = ceil(pixel.b * 32.0) / 32.0;

    // Calculate slice tex coords
    coords_lower_slice = vec2(r + b_lower_slice, g);
    coords_upper_slice = vec2(r + b_upper_slice, g);

    // Get slice colors
    vec4 color_lower_slice = texture2D(u_shader_texture_1, coords_lower_slice);
    vec4 color_upper_slice = texture2D(u_shader_texture_1, coords_upper_slice);

    // Slice blending factor
    float fac = (pixel.b - b_lower_slice) / (b_upper_slice - b_lower_slice);

    // Blend between z slices
    return mix(color_lower_slice, color_upper_slice, fac);
}

void main()
{
    gl_FragColor = colorLookup(texture2D(u_texture, v_texCoords));
}
