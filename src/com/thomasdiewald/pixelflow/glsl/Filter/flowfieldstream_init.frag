/**
 * 
 * PixelFlow | Copyright (C) 2016 Thomas Diewald - http://thomasdiewald.com
 * 
 * A Processing/Java library for high performance GPU-Computing (GLSL).
 * MIT License: https://opensource.org/licenses/MIT
 * 
 */


#version 150 

out vec4 out_pos;

uniform vec2 wh_rcp;

void main(){
  out_pos = vec4(gl_FragCoord.xy * wh_rcp, 0, 0);
}

