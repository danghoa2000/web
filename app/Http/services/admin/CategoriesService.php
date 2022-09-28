<?php

namespace App\Services\Admin;

use App\Models\Category;

class CategoryService
{

    public function get($request)
    {
        // 0 - thư mục sản phẩm, 1 - thư mục bài đăng.
        return Category::with('subCategories')
            ->where('type', $type)
            ->limit($request->pageSize)
            ->offset(($request->currentPage - 1) * $request->pageSize)
            ->sortByDesc("updated_at")
            ->get();
    }
}
