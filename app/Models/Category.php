<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use HasFactory, SoftDeletes;

     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'meta_title',
        'slug',
        'parent_id',
        'keyword',
        'icon',
        'description',
        'image',
        'type',
        'created_by'
    ];

    protected $table = "categories";

    public function subCategories()
    {
        return $this->hasMany(Category::class, 'parent_id');
    }
}
